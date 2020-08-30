import React from 'react'
import { Input, Flex, Select } from '@chakra-ui/core'

export function Search({ onChange, value, sort, onSortChange, ...props }) {
  return (
    <Flex flexDir={['column', 'row']} justifyContent="space-between" {...props}>
      <Input
        placeholder="Filtre por stack, cidade ou senioridade"
        borderRadius="10px"
        color="pink.400"
        size="lg"
        variant="filled"
        value={value}
        onChange={onChange}
        width="100%"
        maxW="630px"
        mb={[4, 0]}
        mr={[0, 4]}
        _focus={{
          color: 'pink.400',
          borderColor: 'pink.200',
        }}
      />

      <Select
        variant="filled"
        width={['100%', '220px']}
        borderRadius="10px"
        size="lg"
        color="gray.400"
        value={sort}
        onChange={onSortChange}
        _focus={{
          color: 'pink.400',
          borderColor: 'pink.200',
        }}
      >
        <option value="desc">
          Mais Recentes
        </option>
        <option value="asc">Mais Antigos</option>
      </Select>
    </Flex>
  )
}
