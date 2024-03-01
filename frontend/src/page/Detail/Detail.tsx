import { Divider, Layout, Typography } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { imageOnError } from "../../services/global";
const { Title, Paragraph, Text, Link } = Typography;

export default function Detail() {
  const location = useLocation();
  const [data, setData] = useState<any>("");
  console.log(data);

  useEffect(() => {
    setData(location?.state);
  }, []);
  return (
    <Layout className="py-6 min-h-screen overflow-x-hidden" style={{ margin: 0 }}>
      <Title className="">Detail Berita</Title>
      <div className="md:w-[50%] px-6 mt-2 mx-auto w-full min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          <div className="flex justify-start text-gray-600">
            {" "}
            {moment
              .utc(data?.publishedAt)
              .local()
              .format("dddd, DD MMMM YYYY , HH:mm")}
          </div>
          <img
            src={data?.urlToImage}
            onError={imageOnError}
            alt=""
            className="w-full mt-2"
          />
          <Paragraph className="mt-4 text-justify">
            {data?.description}
          </Paragraph>
        </div>
        <div>
          <Divider className="bg-gray-300" />
          <Link className="text-black text-justify block">{data?.url}</Link>
          <Text className="text-left block">{data?.author}</Text>
        </div>
      </div>
    </Layout>
  );
}
