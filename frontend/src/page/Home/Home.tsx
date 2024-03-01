import { Card, Layout, Typography } from "antd";
import React, { useEffect, useState } from "react";
import * as API from "../../services/api";
import _ from "lodash";
import moment from "moment";
import { imageOnError } from "../../services/global";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
const { Meta } = Card;
import NoImage from "../../assets/images/empty.jpg";
import LoadingOvr from "../../loading/loading";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const filter = {
    q: "Apple",
    country: "",
    sortBy: "",
    from: "",
  };

  const getData = async () => {
    setLoading(true);
    try {
      const query = {
        // q: filter.q,
        country: "us",
        sortBy: filter.sortBy,
        from: filter.from,
      };
      const res: any = await API.getNews(query);
      setLoading(false)
      setData(res.data.articles);
    } catch (error) {
      setLoading(false);
    }
  };

  const navigateTo = (item: any) => {
    navigate("/detail", {
      state: item,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout className="p-16 min-h-screen">
      <LoadingOvr loading={loading} />
      <Title className="">Berita Terkini</Title>
      <Layout className="grid md:grid-cols-4 mt-4 gap-4 grid-cols-1">
        {_.map(data, (item: any) => (
          <Card
            key={item.id}
            cover={
              <img
                alt="example"
                onError={imageOnError}
                src={item.urlToImage ? item.urlToImage : NoImage}
                className="object-center w-full h-56"
              />
            }
            className="mt-4 cursor-pointer hover:scale-110 duration-100"
            onClick={() => navigateTo(item)}
          >
            <Meta title={item.title} description={item.description} />
            <Text className="text-xs">
              {moment
                .utc(item.publishedAt)
                .local()
                .format("dddd, DD MMMM YYYY , HH:mm")}
            </Text>
          </Card>
        ))}
      </Layout>
    </Layout>
  );
};

export default Home;
