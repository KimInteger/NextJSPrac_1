import Image from "next/image";
import styles from "./page.module.css";
import HOneTag from "@/component/makeTag";

export default function Home() {
  return (
    <div>
      <HOneTag textNode={"Hellow Next.js!"} />
    </div>
  );
}
