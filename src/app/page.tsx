import Image from 'next/image'
import { Container } from '@mui/material'
import HerosectionPasport from '@/components/herosection/Herosection'

export default function Home() {
  return (
    <Container sx={{marginTop: {xs:'40px', md:'80px'}}}>
      <HerosectionPasport/>
    </Container>
  )
}
