import FooterData from '~/data/footer.json'
import Link from 'next/link';
import { FooterItems } from "../Footer/Footer.styles"

const Footer = () => {
    const FooterPt = FooterData['pt-BR']
    return (
        FooterPt && FooterPt.map((footerItem, i) => {
            <FooterItems key={i}>
                <Link href={footerItem.link}>{footerItem.title}</Link>
            </FooterItems>
        }
      )  
)}

export default Footer