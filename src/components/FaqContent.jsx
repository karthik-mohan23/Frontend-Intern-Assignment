import { faqs } from "../utils/faq.js";

const FaqContent = () => {
  return (
    <div>
      {faqs.map((faq) => {
        const { question, answer } = faq;
        return (
          <div key={question} className="my-[15px]">
            <h4 className="text-lg lg:text-xl font-bold">{question}</h4>
            <p className="text-base leading-6 my-[15px]">{answer}</p>
          </div>
        );
      })}
    </div>
  );
};
export default FaqContent;
