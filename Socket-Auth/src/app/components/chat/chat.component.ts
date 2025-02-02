import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RoleService } from 'src/app/auth/services/role.service';
import { SocketService } from 'src/app/services/socket.service';


export interface ResponseToken {
  username: string,
  role: string,
  iat: number,
  exp: number
}

export interface ChatMessage {
  text: string,
  sender: string
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {

  messages: ChatMessage[] = [];
  message = '';

  userData: ResponseToken | null = null;
  statusConnection!: boolean;

  constructor(
    private readonly authService: AuthService,
    public  readonly socketService: SocketService,
    private readonly roleService: RoleService,
    private readonly cd: ChangeDetectorRef
  ) {

    this.socketService.isConnected.subscribe((connected) => {
      console.log("Estado de conexión chatcomponent:", connected);
      this.statusConnection = connected;
      this.cd.markForCheck();
    });
  }

  get isAdmin(): boolean {
    return this.roleService.isAdmin();
  }
  
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    
    if (token) {
      this.socketService.connect(token);
    }

    if (token) {
      this.socketService.onMessage().subscribe((msg: ChatMessage) => {
        this.messages.push(msg);
        this.cd.markForCheck();
      });
    } else {
      console.log("No hay Token disponible!");
    }
  }
  ngOnDestroy(): void {
    this.socketService.disconnect();
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }
}
