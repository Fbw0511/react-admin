import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
  const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center', paddingTop: 120 }}>
      <h1>404</h1>
      <Button type="primary" onClick={()=>navigate('/')}>回首页</Button>
    </div>
  )
}
