import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/apiAuth";
import { useQueryClient } from "react-query";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { login, isLoading };
}
