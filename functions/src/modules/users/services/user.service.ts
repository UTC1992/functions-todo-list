import { Firestore } from '@google-cloud/firestore'
import { User } from '../types/types'

class UserService {
  private readonly firestore: Firestore

  constructor() {
    this.firestore = new Firestore()
  }

  // Method to create a new user
  public async createUser(userData: User): Promise<void> {
    try {
      const usersCollection = this.firestore.collection('users_coll')
      await usersCollection.add(userData)
      console.log('User created successfully')
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    }
  }

  // Method to check if a user exists by email
  public async userExists(email: string): Promise<boolean> {
    try {
      const usersCollection = this.firestore.collection('users_coll')
      const querySnapshot = await usersCollection
        .where('email', '==', email)
        .get()
      return !querySnapshot.empty
    } catch (error) {
      console.error('Error checking user existence:', error)
      throw error
    }
  }
}

export default UserService
