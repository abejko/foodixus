import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify"; // Import notification library

import { updateCurrentUser } from "../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated"); // Show success notification
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      toast.error(err.message); // Show error notification
    },
  });

  return { updateUser, isUpdating };
}
