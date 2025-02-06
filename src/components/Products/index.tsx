import type React from "react"
import { Card, Tabs, Button } from "antd"
import { PhoneOutlined } from "@ant-design/icons"

const { TabPane } = Tabs

const products = [
  {
    name: "HTB 350",
    description: "Токарный станок с наклонной станиной",
    price: "198 400 ¥",
    models: ["HTB 350"],
  },
  {
    name: "HTB 450A",
    description: "Токарный станок с наклонной станиной",
    price: "235 840 ¥",
    models: ["HTB 450A"],
  },
  {
    name: "HTB 550A",
    description: "Токарный станок с наклонной станиной",
    price: "341 280 ¥",
    models: ["HTB 550A"],
  },
  {
    name: "VMC 1160",
    description: "Фрезерный обрабатывающий центр",
    price: "588 640 ¥",
    models: ["VMC 1160"],
  },
  {
    name: "VMC 855",
    description: "Фрезерный обрабатывающий центр",
    price: "408 480 ¥",
    currency: "¥",
    models: ["VMC 855"],
  },
]

export const ProductSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.name}
          title={product.name}
          extra={<span className="text-red-500 font-bold">{product.price}</span>}
          className="bg-gray-700 text-white"
        >
          <p>{product.description}</p>
          <Tabs defaultActiveKey="0">
            {product.models.map((model, index) => (
              <TabPane tab={model} key={index}>
                <p>Характеристики модели {model}</p>
              </TabPane>
            ))}
          </Tabs>
          <Button type="primary" icon={<PhoneOutlined />} className="mt-4">
            Обратный звонок
          </Button>
        </Card>
      ))}
    </div>
  )
}

