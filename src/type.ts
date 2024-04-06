
export type userType = {
    name: string,
    email: string,
    date: Date,
    age: number,
    gender: string,
    status: string,
    state: string,
    city: string,
    hobbies: []
  }

export type cityType = {
    id: string,
    name: string,
    parentId: string
}