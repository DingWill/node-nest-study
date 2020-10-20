import {Test, TestingModule} from '@nestjs/testing'
import {UsersController} from './users.controller'
import {UsersService} from './users.service'

describe('UsersController', () => {
  let usersController: UsersController

  beforeEach(async () => {
    const users: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).compile()

    usersController = users.get<UsersController>(UsersController)
  })

  describe('users', () => {
    it('Is has total', () => {
      expect(usersController.getAllUsers()).toHaveProperty('total')
    })
    it('Is has list', () => {
      expect(usersController.getAllUsers()).toHaveProperty('list')
    })
  })
})