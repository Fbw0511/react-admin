import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import zh_CN from "antd/locale/zh_CN";
import { router } from "@/router";
import { useAppStore } from "@/stores/appStore";

export default function App() {
  const dark = useAppStore((s)=>s.dark)
  return (
    <ConfigProvider locale={zh_CN} theme={{ algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <RouterProvider router={router}/>
    </ConfigProvider>
  )
}