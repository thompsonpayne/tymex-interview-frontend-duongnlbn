"use server";


export async function getData() {
    const baseUrl = process.env.API_BASE_URL;
    try {
        const response = await fetch(`${baseUrl}/api/products`, { 
          next: { revalidate: 60 },
          // Add cache option to help with static generation
        //   cache: 'force-cache'
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        return response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        return { products: [] };
      }
}