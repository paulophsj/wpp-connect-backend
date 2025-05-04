import { Whatsapp } from "@wppconnect-team/wppconnect";
import { WhatsappUser } from "../interfaces/whatsappUser.interface";

export function Typing(): MethodDecorator {
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const user: WhatsappUser = args[0];
      const whatsapp: Whatsapp = user.Whatsapp;
      const telefone: string = user.Cliente.from;

      await whatsapp.startTyping(telefone);
      const result = await originalMethod.apply(this, args);
      await whatsapp.stopTyping(telefone);

      return result;
    };

    return descriptor;
  };
}
