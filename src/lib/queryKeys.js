export const queryKeys = {
  campsites: {
    list: (pet) => ["campsites", "list", pet],
    detail: (id) => ["campsites", "detail", id],
  },
  trips: {
    all: () => ["trips"],
  },
};
