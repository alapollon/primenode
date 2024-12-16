import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Asset {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  media: string;
}