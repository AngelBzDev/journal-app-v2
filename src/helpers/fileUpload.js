export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/ddiigzxpe/upload";

  const formData = new FormData();
  formData.append("upload_preset", "journal-appv2");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "post",
      body: formData,
    });

    if (resp.ok) {
      const cloudRes = await resp.json();
      return cloudRes.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};
