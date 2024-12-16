import { InputType, Field } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';


@InputType()
export class CreateAssetInput {

  @Field()
  universalidentity: string; 
  @Field()
  title: string;

  @Field()
  paragraph: {};


@Field(() => GraphQLUpload)
media: Promise<FileUpload>;
  
}