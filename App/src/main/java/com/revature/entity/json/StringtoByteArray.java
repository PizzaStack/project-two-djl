package com.revature.entity.json;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

// https://stackoverflow.com/questions/41597491/failed-to-decode-value-string-as-base64
public class StringtoByteArray extends JsonDeserializer<byte[]> {
	@Override
	public byte[] deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
		return p.getText().getBytes(StandardCharsets.UTF_8);
	}
}