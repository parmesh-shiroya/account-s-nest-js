import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';

import { InstituteUser, Institute } from 'src/institute/institute.schema';



@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ type: MSchema.Types.ObjectId, ref: Institute.name })
    instituteId: string;

    @Prop()
    name: string;
    @Prop()
    mobile: string;
    @Prop()
    image: string;
    @Prop()
    email: string;
    @Prop({ default: false })
    isMobileVerified: boolean;
    @Prop({ default: true })
    isActive: boolean;
    @Prop({ default: false })
    isBlocked: boolean;
    @Prop()
    note: string;
    @Prop()
    dob: string;
    @Prop()
    city: string;
    @Prop()
    panNo: string;

    @Prop({ default: "Gujarat" })
    state: string;
    @Prop({ default: "IN" })
    country: string;
    @Prop()
    address: string;
    @Prop()
    pincode: string;
    @Prop()
    createdIp: string;
    @Prop({ type: MSchema.Types.ObjectId, ref: InstituteUser.name })
    createdBy: string;
    @Prop()
    updatedIp: string;
    @Prop({ type: MSchema.Types.ObjectId, ref: InstituteUser.name })
    updatedBy: string;
    @Prop()
    fcmToken: string;

    createdAt: string;
    updatedAt: string;
    generateJWT: (extra?: object) => any;

    comparePassword: (password: string) => any;

}

@Schema({ timestamps: true })
export class UserRefrence extends Document {
    @Prop({ type: MSchema.Types.ObjectId, ref: User.name })
    userId: string;
    @Prop()
    panNo: string;
    @Prop()
    panImage: string;
    @Prop()
    aadhaarNo: string;
    @Prop()
    aadhaarFrontImage: string;
    @Prop()
    aadhaarFrontBack: string;
    @Prop()
    gst_in: string;
}






export const UserSchema = SchemaFactory.createForClass(User)

export const UserRefrenceSchema = SchemaFactory.createForClass(UserRefrence)