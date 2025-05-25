interface UpdateTodoDTOProps {
  id: number
  text: string
  completedAt: string
}

export class UpdateTodoDTO {
  // Without obj
  // private constructor(
  //   public readonly id: number,
  //   public readonly text?: string,
  //   public readonly completedAt?: string
  // ) {
  // }

  public readonly id: number;
  public readonly text?: string;
  public readonly completedAt?: string;

  constructor(props: UpdateTodoDTOProps) {
    this.id = props.id
    this.text = props.text
    this.completedAt = props.completedAt
  }


  get values() {
    const todoObj: Record<string, any> = {} 

    if(this.text) todoObj.text = this.text
    if(this.completedAt) todoObj.completedAt = new Date(this.completedAt)

    return todoObj
  }

  // Receive req.body in this case and return a string with a message/error and todo
  static create(props: {[key:string]: any}): [string?, UpdateTodoDTO?] {
    const {id, text, completedAt} = props

    if(!id || isNaN(Number(id))) {
      return ['The id is mandatory']
    }
  
    if(completedAt) {
      const newCompletedAt = new Date(completedAt)

      if(newCompletedAt.toString() === 'Invalid Date' || isNaN(newCompletedAt.getTime())) {
        return ['CompletedAt must be a valid date']
      }
    }

    // return [undefined, new UpdateTodoDTO(id, text, completedAt)] // Withouth obj
    return [undefined, new UpdateTodoDTO({completedAt, text, id})]
  }
}
