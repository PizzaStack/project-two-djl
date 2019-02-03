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
		gen.writeString(new String(value, StandardCharsets.UTF_8));
	}
}
