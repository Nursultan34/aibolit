import { Card } from "@mui/material";

export default function CardLayout({children}) {
    return (
        <Card 
          sx={{width: 320, height:220}}>
        {children}
        </Card>
    )
}   