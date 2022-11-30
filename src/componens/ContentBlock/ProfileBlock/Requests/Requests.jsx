import React, { useState, useEffect } from "react";

export default function Requests() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let output ;

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=4"
        );

        const json = await request.json();
        const result = await json.map((user) => {
          return {
            id: user.id,
            name: user.name,
            catchPhrase: user.company.catchPhrase,
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
    // return <div>Ошибка: {error.message}</div>;
    output = <div>Ошибка: {error.message}</div> ;
  } else if (!isLoaded) {
    // return <div>Загрузка...</div>;
    output = <div>Загрузка...</div> ;
  } else {
    output =  <div>
        <div>
            <span>
                Заявки 
                </span>
                <span>
                    Новых заявок {items.length}
                </span>
        </div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.catchPhrase}</span>
            </div>
          );
        })}
      </div>
    
  }

  return (
    <div className = {`flex bg-[#ffffff] w-[32%]`}>
        {output}
    </div>
  )






}
