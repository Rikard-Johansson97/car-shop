export interface EmailData {
  firstName: string;
  lastName: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  const response = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json() as Promise<EmailResponse>;
};
