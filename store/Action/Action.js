export const GetSearchProduct = async (
  currentPageNumber = number,
  pageSize = number,
  payload = any
) => {
  try {
    const queryParams = new URLSearchParams(payload).toString();

    const response = await fetch(
      // `${process.env.NEXT_PUBLIC_SERVER}/api/items/getproducts?page=${currentPageNumber}&limit=${pageSize}&${queryParams}`,
      `https://node-express-hostapi.vercel.app/api/items/getproducts?page=1&limit=10`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: errorData.message || "Something went wrong!",
      };
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
    return {
      code: error.status || 500,
      message: error.message || "Service Unavailable",
    };
  }
};
