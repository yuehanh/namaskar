export const updateUser = (user) =>
  $.ajax({
    url: `api/users/${user.id}`,
    method: "PATCH",
    data: { user },
  });

export const fetchUser = (userId) =>
  $.ajax({
    url: `api/users/${userId}`,
    method: "GET",
  });
