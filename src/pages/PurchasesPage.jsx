import { useEffect } from "react"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import getTokenConfig from "../utils/getTokenConfig"
import PurchasesCard from '../components/PurchasesPage/PurchasesCard'
import './styles/purchasesPage.css'

const PurchasesPage = () => {

  const [purchases, getPurchases] = useFetch()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    getPurchases(url, getTokenConfig())
  }, [])


  return (
    <section className="main-container purchases">
      <h1>My purchases</h1>
      {
        purchases?.length ? (
          <ul className="purchases-product-list">
            {purchases?.map(purchase => (
              <PurchasesCard purchase = {purchase} key={purchase.id} />
            ))}
          </ul>
        ) : (
          <p className="no-purchases-yet">You haven't bought anything yet. <Link to='/' /></p>
        )
      }
    </section>
  )
}

export default PurchasesPage
