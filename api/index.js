class ApiBase {
  getAllProducts = async (appendUrl) => {
    const config = useRuntimeConfig()
    const result = await $fetch(config.public.apiBase + `${appendUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "sw-access-key": config.public.apiSecret,
      },
    });
    return result;
  };
}

export default new ApiBase();
