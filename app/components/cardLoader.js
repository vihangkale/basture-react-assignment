//import martine
import { Flex, Skeleton } from "@mantine/core";

export default function CardLoader({ isLoading }) {
  return (
    <>
      <Skeleton
        visible={isLoading}
        width={120}
        height={120}
        style={{ borderRadius: "50%", marginInline: "auto" }}
      />
      <Skeleton
        visible={isLoading}
        width="100%"
        height={27.9}
        mt={16}
        style={{ marginInline: "auto" }}
      />
      <Flex rowGap={5} direction="column" mt={5}>
        <Skeleton visible={isLoading} width="100%" height={24.8} />
        <Skeleton visible={isLoading} width="100%" height={24.8} />
        <Skeleton visible={isLoading} width="100%" height={24.8} />
      </Flex>
      <Flex columnGap={4} mt={15}>
        <Skeleton visible={isLoading} width="50%" height={36} />
        <Skeleton visible={isLoading} width="50%" height={36} />
      </Flex>
    </>
  );
}
