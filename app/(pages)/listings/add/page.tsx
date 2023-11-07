"use client"
import { useLoadScript } from "@react-google-maps/api";
import { BusinessListingForm } from "@/components/form/listing/business-listing-form"

const ListingAdd = () => {
      const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        libraries: ["places"],
      });

      if (!isLoaded) return <div>Loading</div>
  return ( <div className="h-full w-full">
    <BusinessListingForm />
    </div>
  )
}

export default ListingAdd