export async function apiRequestHandler(apiFn, setLoading, onSuccess, onError) {
  setLoading && setLoading(true);
  try {
    const response = await apiFn();
    const { data } = response;

    console.log("api response: ", response);

    if (data.success) {
      onSuccess(data?.data);
    }
  } catch (error) {
    console.log(`Error in api request: ${error}`);
    onError();
  } finally {
    setLoading && setLoading(false);
  }
}
