"use client";
import { FormBuilder } from "@/components/blocks/formBuilder";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SendMessage = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <div>
      <Form {...form}>
        <form action="" className="max-w-md mx-auto flex flex-col gap-3">
          <FormBuilder label="Full Name" name="name">
            <Input />
          </FormBuilder>
          <FormBuilder label="Email" name="email">
            <Input type="email" />
          </FormBuilder>
          <FormBuilder label="Message" name="message">
            <Textarea rows={5} />
          </FormBuilder>
          <Button className="w-56 mx-auto my-4">Send Message</Button>
        </form>
      </Form>
    </div>
  );
};

export default SendMessage;
