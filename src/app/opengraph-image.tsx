import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt = "Merissa Li — Product questions. Shipped experiments.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:70,background:"#fff9f3",color:"#302521",fontFamily:"sans-serif"}}><div style={{display:"flex",fontSize:28}}>MERISSA LI / PRODUCT MANAGER</div><div style={{display:"flex",flexDirection:"column",fontSize:80,fontWeight:700,letterSpacing:-4}}><span>Product questions.</span><span style={{background:"#f4c5d8",padding:"0 12px"}}>Shipped experiments.</span></div><div style={{display:"flex",fontSize:25}}>Growth · Experimentation · AI workflows</div></div>,size);
}
