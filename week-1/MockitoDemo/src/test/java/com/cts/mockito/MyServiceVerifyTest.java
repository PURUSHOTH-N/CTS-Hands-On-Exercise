package com.cts.mockito;

import static org.mockito.Mockito.*;

import org.junit.Test;

public class MyServiceVerifyTest {

    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}