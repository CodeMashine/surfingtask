import React, { useState, useEffect } from "react";

export default function NoticeBody() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=2"
        );

        const json = await request.json();
        const result = await json.map((post) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
          };
        });

        setItems(result);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    })();
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        {items.map((item) => {
          return (
            <div key={item.id} className = {`flex flex-col mx-auto w-[80%] border-b-[3px] border-[#2282a8]`}>
              <span className = {`text-xl mt-[1rem]`}>{item.title}</span>
              <span className = {`text-[#827c7c]`}>{item.body}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
