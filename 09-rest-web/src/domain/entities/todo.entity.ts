export class TodoEntity {
  constructor(
    public id: number,
    public text: string,
    public completedAt?: Date|null
  ){}

  get isCompleted() {
    return !!this.completedAt
  }

  // TODO: create a Mapper for do this
  // !: This code is the very similar that 09-rest-web\src\domain\dtos\todos\update-todo.dto.ts :/
  public static mapFromObject(props: {[key:string]: any}): TodoEntity {
    const {id, text, completedAt} = props

    if(!id || isNaN(Number(id))) {
      throw ['The id is mandatory']
    }

    if(completedAt) {
      const newCompletedAt = new Date(completedAt)

      if(newCompletedAt.toString() === 'Invalid Date' || isNaN(newCompletedAt.getTime())) {
        throw ['CompletedAt must be a valid date']
      }
    }

    return new TodoEntity(id, text, completedAt)

  }
}