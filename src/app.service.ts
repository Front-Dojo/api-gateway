import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto) {
    return this.client.send({ role: 'user', cmd: 'create' }, createUserDto);
  }

  getUserById(id: number) {
    return this.client.send({ role: 'user', cmd: 'get-by-id' }, id);
  }

  health() {
    return this.client.send({ role: 'user', cmd: 'health' }, {});
  }

  metrics() {
    return this.client.send({ role: 'user', cmd: 'metrics' }, {});
  }
}
