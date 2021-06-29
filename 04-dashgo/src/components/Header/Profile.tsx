import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joseph Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            oi@josepholiveira.dev
          </Text>
        </Box>
      )}
      
      <Avatar 
        size="md" 
        name="Joseph Oliveira" 
        src="https://github.com/josepholiveira.png" 
      />
    </Flex>
  )
}