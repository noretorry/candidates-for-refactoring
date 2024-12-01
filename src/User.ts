interface IUser {
  name: string;
  age: number;
  address: string;
  phoneNumber: string;
  email: string;
  role: string;
  isActive: boolean;
  isVerified: boolean;
  isPremium: boolean;
  lastLogin: Date;
  registrationDate: Date;
  profilePicture: string;
  bio: string;
  interests: string[];
}

class User {
  private userData: IUser;

  constructor(payload: IUser) {
    this.userData = payload;
  }

  getEmail(): string {
    return this.userData.email;
  }
}