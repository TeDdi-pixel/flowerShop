import DefaultInput from "../../shared/inputs/default/DefaultInput";
import { IoIosArrowForward } from "react-icons/io";
import AditionalTitle from "../../shared/aditionalTitle/AditionalTitle";

const SubscribeToEmails = ({ marginTop }: { marginTop?: string }) => {
  return (
    <div className="subscribe-to-emails" style={{ marginTop: marginTop }}>
      <AditionalTitle title={"Subscribe to our emails"} />
      <p className="subscribe-to-emails__description">
        Be the first to know about new collections and exclusive offers.
      </p>
      <DefaultInput
        text={"E-mail"}
        icon={<IoIosArrowForward height={"2px"} width={"2px"} />}
        type={"email"}
      />
    </div>
  );
};

export default SubscribeToEmails;
