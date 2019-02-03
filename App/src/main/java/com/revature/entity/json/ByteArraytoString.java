package com.revature.entity.json;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class ByteArraytoString extends JsonSerializer<byte[]> {
	@Override
	public void serialize(byte[] value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
		byte[] raw_64 = Base64.getDecoder().decode(value);
		gen.writeString(new String(raw_64, StandardCharsets.UTF_8));
	}
}
