import { Tag } from "antd";

type TextProps = {
  texts: string[];
};

function FormattedTextHighlight({ texts }: TextProps) {
  const convertWordToBold = (text: string) => {
    const parts = text.split(/<kw>(.*?)<\/kw>/g);

    const newText = parts.map((part, index) => {
      if (index % 2 === 1) {
        return <Tag color="#108ee9" key={index}>{part}</Tag>;
      }
      return part;
    })
    return newText;
  };

  const formattedText = texts.map((text, index) => {
    const modifiedText = convertWordToBold(text);

  return (
    <span key={index}>{modifiedText}; </span>
  )
  })
  return formattedText;
}

export default FormattedTextHighlight;
