import {Injectable} from '@nestjs/common'

@Injectable()
export class UsersService {
  getAllUsers() {
    return {
      total: 3,
      list: [
        {
          id: 12,
          name: 'CY.WU'
        },
        {
          id: 100,
          name: 'Best'
        }
      ]
    }
  }
  getUserInfo(id) {
    console.log(id, '====id')
    return {
      id: 12,
      name: 'CY.WU',
      age: 18,
      email: 'cywu@admin.com',
      mobile: 16099784436
    }
  }
}