import { IData_SnippetNews } from "../../utils/interface";
import {
  Button,
  Card,
  ConfigProvider,
  Flex,
  Space,
  Tag,
  theme,
  Typography,
  Image,
} from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import "./Snippet.css";
import { useState } from "react";
import SelectionNumber from "../selectionNumber/selectionNumber";
import FormattedDate from "../formattedDate/formattedDate";
import FormattedTraffic from "../formattedTraffic/formattedTraffic";
import FormattedTextHighlight from "../formattedTextHighlight/FormattedTextHighlight";

const { Title, Text, Link } = Typography;

interface NewsSnippetProps {
  newsData: IData_SnippetNews;
}

const NewsSnippet: React.FC<NewsSnippetProps> = ({ newsData }) => {
  const [openText, setOpenText] = useState(false);
  function setToggleText(status: boolean) {
    if (!status) {
      setOpenText(true);
    } else setOpenText(false);
  }

  const {
    TI,
    DP,
    HIGHLIGHTS,
    REACH,
    KW,
    DOM,
    CNTR,
    LANG,
    SENT,
    TRAFFIC,
    AB,
    URL,
    AU,
    FAV,
  } = newsData;
  const date = FormattedDate(DP);
  const traffic = TRAFFIC.map((item) => FormattedTraffic(item));
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Card className="card">
        <Flex justify="space-between" align="center">
          <Flex justify="flex-start" align="center" gap="small">
            <Text type="secondary" className="small_text">
              {date}
            </Text>
            <Text type="secondary" className="small_text">
              <SelectionNumber>{REACH}K</SelectionNumber> Reach
            </Text>
            <Text type="secondary" className="small_text">
              Top traffic:{" "}
              {traffic.map((x) => (
                <>{x} </>
              ))}
            </Text>
          </Flex>
          <Tag color={SENT === "negative" ? "#ff4d4f" : "#52c41a"}>{SENT}</Tag>
        </Flex>
        <Title level={4} style={{ color: "#1668dc" }}>
          {TI}
        </Title>
        <Space direction="vertical">
          <Flex justify="flex-start" align="center" gap="small">
            <Link underline href={DOM} target="_blank" className="small_text">
              <Image src={FAV} />
              {DOM}
            </Link>
            <Text type="secondary" className="small_text">
              {CNTR}
            </Text>
            <Text type="secondary" className="small_text">
              {LANG}
            </Text>
            <Text type="secondary" className="small_text">
              {AU}
            </Text>
          </Flex>
          <FormattedTextHighlight texts={HIGHLIGHTS} />
          <Button
            type="text"
            color="primary"
            variant="link"
            icon={openText ? <CaretUpOutlined /> : <CaretDownOutlined />}
            iconPosition="end"
            onClick={() => setToggleText(openText)}
          >
            Show more
          </Button>
          {openText && <Text>{AB}</Text>}
          <Text>
            {KW.map((item, index) => (
              <Tag key={index}>
                <Text type="secondary" className="small_text">
                  {item.value} <SelectionNumber>{item.count}</SelectionNumber>
                </Text>
              </Tag>
            ))}
          </Text>
          <Button color="primary" variant="filled" href={URL} target="_blank">
            Original Source
          </Button>
        </Space>
      </Card>
    </ConfigProvider>
  );
};

export default NewsSnippet;
