const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

function getErrorMessage(body) {
  if (
    typeof body === "object" &&
    body !== null &&
    "message" in body &&
    typeof body.message === "string"
  ) {
    return body.message;
  }
  return "요청을 처리하지 못했습니다.";
}

export async function getCampsites(pet) {
  const query = pet === undefined ? "" : `?pet=${pet}`;
  const response = await fetch(`${API_URL}/api/campsites${query}`);

  if (!response.ok) {
    throw new Error("캠핑장 목록을 불러오지 못했습니다.");
  }

  return response.json();
}

export async function getCampsite(id) {
  const response = await fetch(`${API_URL}/api/campsites/${id}`);

  if (response.status === 404 || response.status === 400) {
    return null;
  }
  if (!response.ok) {
    throw new Error("캠핑장 정보를 불러오지 못했습니다.");
  }

  return response.json();
}

export async function getTrips() {
  const response = await fetch(`${API_URL}/api/trips`);

  if (!response.ok) {
    throw new Error("캠핑 계획을 불러오지 못했습니다.");
  }

  return response.json();
}

export async function updateTrip(id, input) {
  const response = await fetch(`${API_URL}/api/trips/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(getErrorMessage(body));
  }

  return response.json();
}

export async function createTrip(input) {
  const response = await fetch(`${API_URL}/api/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(getErrorMessage(body));
  }

  return response.json();
}
