import React, { useEffect, useState } from "react";

export default function CategoriesHomePage() {
  const [move,setMove] = useState(false);
  let list = [
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Speedo_7448c640-44ce-426c-b428-2572d4cc7937_226x.png?v=1624441518",
    },
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Sneaker_Balls_226x.png?v=1624441589",
    },
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Teva_9616c46f-4f82-4fa4-b978-1492acbb3906_226x.png?v=1624441640",
    },
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/TriggerPoint_226x.png?v=1624441688",
    },
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Logo_Brand-04_226x.png?v=1611061899",
    },
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Nike_1f218d29-210e-42c0-ba2d-1801774e18bd_226x.png?v=1627445273",
    },
    {
      name: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Logo_Brand-02_226x.png?v=1611061873",
    },
  ];
  const [categories, setCategories] = useState(list);

  useEffect(() => {
    
    const a = setInterval(() => {
      let l = [...categories];
      l.push(l[0]);
      l.splice(0, 1);

      setCategories(l);
    }, 5000);

    return ()=>{
      clearInterval(a);
    };
  }, [categories]);

  const handleChangePosition = (value) => {
    if (value === 1) {
      let ss = [...categories];
      ss.push(ss[0]);
      ss.splice(0, 1);

      setCategories(ss);
      setMove(true)
    }
    else{
      
      let ss = [...categories];
      ss.unshift(ss[ss.length-1])
      ss.pop();

      setCategories(ss)
      setMove(true)
    }
  };
  return (
    <div className="home__categories">
      <button className="home__categories--btn--sub" onClick={() => handleChangePosition(-1)}><i class="fas fa-chevron-left"></i></button>
      <div className={move ? "home__categories--main move" : "home__categories--main"}>
        {categories.length > 0 &&
          categories.map((item) => {
            return (
              <div className="home__categories--main--item">
                <img src={item.name} alt="" />
              </div>
            );
          })}
      </div>
      <button className="home__categories--btn--add" onClick={() => handleChangePosition(1)}><i class="fas fa-chevron-right"></i></button>
    </div>
  );
}
