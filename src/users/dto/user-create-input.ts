import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UserCreateInput {
  @Field()
  email: string

  @Field({ nullable: true })
  name: string
}
