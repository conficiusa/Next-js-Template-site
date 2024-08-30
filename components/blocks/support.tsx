import SendMessage from "@/components/blocks/sendMessage";
import { FAQ } from "@/components/blocks/FAQ";

const Support = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="border-r-[1px]">
          <p className="text-sm text-muted-foreground text-center my-2 max-w-md mx-auto">
            We would love to hear from you. Leave a message and we will get back
            to you as soon as possible
          </p>
          <SendMessage />
        </div>
        <div className="px-6">
          <div>
            <div className="mb-6">
              <h2 className="text-md font-medium mb-1">Locate US.</h2>
              <div className="text-sm">
                <address>Uk-11223-344</address>
                <address>Opposite Goil Filling Station</address>
                <address>Tamale, Ghana</address>
              </div>
            </div>
            <div>
              <h2 className="text-md font-semibold mb-1">Reach Us.</h2>
              <div className="text-sm">
                <address>Phone: +233 24 123 4567</address>
                <address>Email: addawebadua@gmail.come</address>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-semibold mt-4">FAQ.</h1>
          <div className="py-2">
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
